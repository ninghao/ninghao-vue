<template>
  <h3>{{ name }}</h3>

  <UserLogin
    v-if="!isLoggedIn"
    @login-success="onLoginSuccess"
    @login-error="onLoginError"
  />

  <div v-if="currentUser">
    <div>{{ currentUser.name }}</div>
    <button @click="logout">退出</button>
  </div>

  <input
    v-if="isLoggedIn"
    type="text"
    v-model="title"
    @keyup.enter="createPost"
    placeholder="输入内容标题"
  />

  <input
    type="file"
    ref="file"
    @change="onChangeFile"
    accept="image/png, image/jpeg, image/jpg"
  />

  <div class="drag-zone" @dragover.prevent @drop.prevent="onDropDragZone">
    <div>把图像文件拖放到这里</div>
  </div>

  <div v-if="imageUploadProgress">
    <span class="image-upload-progress">{{ imageUploadProgress + '%' }}</span>
  </div>

  <div v-if="imagePreviewUrl">
    <img class="image-preview" :src="imagePreviewUrl" />
  </div>

  <div>{{ errorMessage }}</div>
  <div v-for="post in posts" :key="post.id">
    <input
      type="text"
      :value="post.title"
      @keyup.enter="updatePost($event, post.id)"
    />
    <button @click="deletePost(post.id)">删除</button>
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';
import UserLogin from '@/user/components/user-login.vue';

export default {
  data() {
    return {
      name: '宁皓网',
      posts: [],
      errorMessage: '',
      token: '',
      title: '',
      currentUser: null,
      file: null,
      imagePreviewUrl: null,
      imageUploadProgress: null,
    };
  },

  computed: {
    isLoggedIn() {
      return this.token ? true : false;
    },
  },

  async created() {
    this.getPosts();

    const tid = localStorage.getItem('tid');
    const uid = localStorage.getItem('uid');

    if (tid) {
      this.token = tid;
    }

    if (uid) {
      this.getCurrentUser(uid);
    }
  },

  methods: {
    onDropDragZone(event) {
      console.log(event.dataTransfer.files);

      const file = event.dataTransfer.files[0];

      if (file) {
        this.file = file;

        // 设置内容标题
        this.title = file.name.split('.')[0];

        // 生成预览图像
        this.createImagePreview(file);
      }
    },

    async createFile(file, postId) {
      // 创建表单
      const formData = new FormData();

      // 添加字段
      formData.append('file', file);

      // 上传文件
      try {
        const response = await apiHttpClient.post(
          `/files?post=${postId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },

            onUploadProgress: event => {
              console.log(event);

              const { loaded, total } = event;

              this.imageUploadProgress = Math.round((loaded * 100) / total);
            },
          },
        );

        // 清理
        this.file = null;
        this.imagePreviewUrl = null;
        this.$refs.file.value = '';
        this.imageUploadProgress = null;

        console.log(response.data);
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    createImagePreview(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = event => {
        this.imagePreviewUrl = event.target.result;
      };
    },

    onChangeFile(event) {
      console.log(event.target.files);
      const file = event.target.files[0];

      if (file) {
        this.file = file;

        this.title = file.name.split('.')[0];

        // 生成预览图像
        this.createImagePreview(file);
      }
    },

    logout() {
      this.token = '';
      this.currentUser = null;

      localStorage.removeItem('tid');
      localStorage.removeItem('uid');
    },

    async getCurrentUser(userId) {
      try {
        const response = await apiHttpClient.get(`/users/${userId}`);

        this.currentUser = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    onLoginSuccess(data) {
      this.token = data.token;
      this.getCurrentUser(data.id);

      localStorage.setItem('tid', data.token);
      localStorage.setItem('uid', data.id);
    },

    onLoginError(error) {
      this.errorMessage = error.data.message;
    },

    async deletePost(postId) {
      try {
        await apiHttpClient.delete(`/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async updatePost(event, postId) {
      console.log(event.target.value);
      console.log(postId);

      try {
        await apiHttpClient.patch(
          `/posts/${postId}`,
          {
            title: event.target.value,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );

        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async getPosts() {
      try {
        const response = await apiHttpClient.get('/posts');

        // console.log(axios.defaults);

        this.posts = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    async createPost() {
      try {
        const response = await apiHttpClient.post(
          '/posts',
          {
            title: this.title,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );

        console.log(response.data);

        if (this.file) {
          this.createFile(this.file, response.data.insertId);
        }

        this.title = '';

        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },

  components: {
    UserLogin,
  },
};
</script>

<style>
@import './styles/app.css';
</style>

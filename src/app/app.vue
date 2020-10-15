<template>
  <h3>{{ name }}</h3>

  <UserLogin
    v-if="!isLoggedIn"
    @login-success="onLoginSuccess"
    @login-error="onLoginError"
  />

  <div v-if="currentUser">
    <div>{{ currentUser.name }}</div>
  </div>

  <input
    v-if="isLoggedIn"
    type="text"
    v-model="title"
    @keyup.enter="createPost"
    placeholder="输入内容标题"
  />

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

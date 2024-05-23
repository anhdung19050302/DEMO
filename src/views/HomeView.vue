<template>
  <div class="home">
    <div>
      Sort by:
      <button
        @click="sortbyFullname"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Fullname
      </button>

      <button
        @click="sortbyUsername"
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Username
      </button>
    </div>
    <UserTable :userInfos="userInfors" />
  </div>
  <div class="mt-5">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-base h-10">
        <li>
          <div
            @click="changePagePrev"
            class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="
              current_page === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
            "
          >
            Previous
          </div>
        </li>
        <li v-for="(page, key) in totalPage" :key="key">
          <div
            v-if="current_page != page"
            @click="changePage(page)"
            href="#"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            {{ page }}
          </div>
          <div
            v-else
            href="#"
            class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white cursor-pointer"
          >
            {{ page }}
          </div>
        </li>

        <li>
          <div
            @click="changePageNext"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="
              current_page === totalPage
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            "
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import UserTable from "@/components/UserTable.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    UserTable,
  },
  data() {
    return {
      current_page: 1,
      results: 10,
      totalPage: 10,
    };
  },
  computed: {
    userInfors() {
      return this.$store.state.userInfors;
    },
  },
  created() {
    this.$store.dispatch("fetchUserInfor", {
      page: this.current_page,
      results: this.results,
    });
  },
  methods: {
    changePage(page) {
      this.current_page = page;
      this.$store.dispatch("fetchUserInfor", {
        page: this.current_page,
        results: this.results,
      });
    },
    changePageNext() {
      if (this.current_page === this.totalPage) return;
      this.current_page += 1;
      this.$store.dispatch("fetchUserInfor", {
        page: this.current_page,
        results: this.results,
      });
    },
    changePagePrev() {
      if (this.current_page === 1) return;
      this.current_page -= 1;
      this.$store.dispatch("fetchUserInfor", {
        page: this.current_page,
        results: this.results,
      });
    },
    sortbyFullname() {
      this.$store.dispatch("sortbyFullname");
    },
    sortbyUsername() {
      this.$store.dispatch("sortbyUsername");
    },
  },
};
</script>

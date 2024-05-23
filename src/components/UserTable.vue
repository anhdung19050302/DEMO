<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-left"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Information</th>
        </tr>
      </thead>
      <tbody class="" v-if="userInfos.length !== 0">
        <tr
          v-for="(userInfo, key) in userInfos"
          :key="key"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <img
              class="w-10 h-10 rounded-full"
              :src="userInfo.picture.thumbnail"
              alt="Jese image"
            />
            <div class="ps-3">
              <div class="text-base font-semibold">
                {{
                  `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`
                }}
              </div>
              <div class="font-normal text-gray-500">
                {{ userInfo.login.username }}
              </div>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UserTable",
  props: {
    userInfos: {
      type: Array,
      required: true,
    },
  },
};
</script>

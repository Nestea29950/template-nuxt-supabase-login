<template>
  <form @submit.prevent="login" class="flex flex-col">
    <label for="email" class="sr-only">Email</label>
    <input
      v-model="email"
      id="email"
      type="email"
      placeholder="Email"
      required
      aria-required="true"
      class=""
    />

    <label for="password" class="sr-only">Password</label>
    <input
      v-model="password"
      id="password"
      type="password"
      placeholder="Password"
      required
      aria-required="true"
      class=""
    />

    <button type="submit" class="w-fit outline">Login</button>

    <NuxtLink to="/register" class="underline hover:no-underline">
      Don't have an account? Sign up
    </NuxtLink>
  </form>
</template>

<script setup>
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");

const login = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
  email: email.value ,
  password: password.value
})
if(error){
    throw new Error(error);
  }

  console.log(data);
 
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<style scoped>
</style>

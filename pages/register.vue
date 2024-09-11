<template>
  <form @submit.prevent="createAccount" class="flex flex-col">
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

    <label for="confirmPassword" class="sr-only">Confirm Password</label>
    <input
      v-model="confirmPassword"
      id="confirmPassword"
      type="password"
      placeholder="Confirm Password"
      required
      aria-required="true"
      class=""
    />

    <button type="submit" class="outline w-fit">Create Account</button>

    <NuxtLink to="/login" class="underline hover:no-underline">
      Already have an account? Log in
    </NuxtLink>
  </form>
</template>

<script setup>
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const createAccount = async () => {
  try {
    if (password.value !== confirmPassword.value) {
      console.error("Passwords do not match!");
      throw new Error('password no match');
    } else {
      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });

      if (error) {
        throw new Error(error);
      }

      console.log("Compte créé avec succès:", data);
      router.push('/login')
    }
  } catch (error) {
    console.error("Erreur capturée dans le bloc catch:", error.message);
  }
};
</script>


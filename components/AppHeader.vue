<template>
  <div>
    Logged: {{ isLoggedIn ? 'Yes' : 'No' }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const supabase = useSupabaseClient();
const isLoggedIn = ref(false);

const checkLoginStatus = async () => {
  try {
    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Erreur lors de la récupération de l’utilisateur:', error.message);
    } else {
      isLoggedIn.value = user !== null;
    }
  } catch (err) {
    console.error('Erreur inattendue:', err.message);
  }
};

onMounted(() => {
  checkLoginStatus();
});
</script>

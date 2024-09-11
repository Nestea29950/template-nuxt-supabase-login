// middleware/auth.js
export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabaseClient();
    const { data: user, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error('Error getting user:', error.message);
    }
  
    if (user) {
      
      const protectedRoutes = ['/login', '/register'];
      
      // Rediriger uniquement si la route actuelle est une route protégée
      if (protectedRoutes.includes(to.path)) {
        return navigateTo('/');
      }
    }
  });
  
<script setup>
import { ref } from 'vue'

defineProps({
  defaultValue: Number
})


const count = ref(20);

  
</script>

 <template>
   <button type="button" @click="count++">count is: {{ count }}</button>
 </template>
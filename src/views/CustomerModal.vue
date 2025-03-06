<template>
    <div class="customer-modal">
      <ModalContainer @close="closeModal">
        <SearchBar 
          v-model="searchQuery" 
          :filteredResults="filteredCustomers.length"
          :totalResults="customers?.length"
          :disabled="loading"
        />
        
        <div v-if="loading" class="loading-state">
          <div class="loader"></div>
          <p>Loading customers...</p>
        </div>
  
        <div v-else-if="error" class="error-state">
          <p>{{ error }}</p>
          <button @click="retryFetch" class="retry-button">Retry</button>
        </div>
  
        <CustomerList 
          v-else 
          :customers="filteredCustomers" 
        />
      </ModalContainer>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import ModalContainer from '@/components/ModalContainer.vue';
  import CustomerList from '@/components/CustomerList.vue';
  import SearchBar from '@/components/SearchBar.vue';
  
  export default {
    name: 'CustomerModal',
    components: {
      ModalContainer,
      CustomerList,
      SearchBar
    },
    
    data() {
      return {
        searchQuery: ''
      };
    },
    
    computed: {
      ...mapState(['customers', 'loading', 'error']),
      filteredCustomers() {
        return this.$store.getters.filteredCustomers(this.searchQuery);
      }
    },
    
    methods: {
      ...mapActions(['fetchCustomers']),
      closeModal() {
        this.$router.push('/');
      },
      retryFetch() {
        this.fetchCustomers();
      }
    },
    
    created() {
      this.fetchCustomers();
    }
  };
  </script>
  
  <style scoped lang="scss">
  @import '../styles/variables.scss';

.customer-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
}

.modal-content {
    padding: 20px;
}

.search-input {
    flex-grow: 1;
    padding: 12px;
    border-radius: 8px;
    border: none;
    background: #f5f5f5;
    margin-right: 16px;
}

.results-count {
    color: #666;
}

.customer-list {
    display: flex;
    flex-direction: column;
}

.loading-state, .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    text-align: center;
}

.loader {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #6c63ff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.retry-button {
    background: #6c63ff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 16px;
    
    &:hover {
        background: #5b54d6;
    }
}
  </style>
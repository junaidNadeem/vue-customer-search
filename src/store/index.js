import Vue from 'vue';
import Vuex from 'vuex';
import { getCustomers } from '../api/customers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: [],
    loading: false,
    error: null
  },
  
  mutations: {
    SET_CUSTOMERS(state, customers) {
      state.customers = customers;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  
  actions: {
    async fetchCustomers({ commit }) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      
      try {
        const response = await getCustomers();
        commit('SET_CUSTOMERS', response.data);
      } catch (error) {
        commit('SET_ERROR', error.message);
        console.error('Error fetching customers:', error);
      } finally {
        commit('SET_LOADING', false);
      }
    }
  },
  
  getters: {
    filteredCustomers: (state) => (searchQuery) => {
      const query = searchQuery.toLowerCase();
      return state.customers.filter(customer => {
       // const cityName = customer.store_locations?.[0]?.city || '';
        return customer.name.toLowerCase().includes(query) ||
               customer.datasource_id.toLowerCase().includes(query);
      }).map(customer => ({
        id: customer.datasource_id,
        name: customer.name,
        name2: customer.name_2,
        city: customer.shipping_addresses?.[0]?.city || customer.store_locations?.[0]?.city || '',
        verified: customer.status == "Approved",
        parentName: customer?.parent?.name || '',
      }));
    }
  }
});
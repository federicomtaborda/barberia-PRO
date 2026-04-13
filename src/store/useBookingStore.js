import { create } from 'zustand';

// Temporary mock data for services until API is ready
const MOCK_SERVICES = [
  { id: 's1', name: 'Classic Cut', price: 45, duration: 45 },
  { id: 's2', name: 'Royal Beard Trim', price: 35, duration: 30 },
  { id: 's3', name: 'Facial Treatment', price: 55, duration: 50 }
];

const MOCK_BARBERS = [
    { id: 1, name: 'Julian Vance', title: 'Master Barber', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvKzXbpI3ZAG_1qY2ZHAXqwepzsHS7EYM8jM_RL9eHTbD35OsL4aLGO7YULqMQ-BLw1e3SSqpRDad34tAkgVDNOnO4gJcfXhwLNEyAkcV43qPgspIv4kWOkKjU_0yRR2O5Ps4n4gRN-NN6qxbac8Z5-TH_CGiEXwt4xSH-42o_L_5nRpFWeiU7q7NmcoPFfgQ3ltEj6-vzm9i1gY2t6PZPDlsT1GqXoK6k6GzSp4HgBn-3bK9ewFJaBEuMwHRVzHEh-cTEYue01rbS' },
    { id: 2, name: 'Marcus Sterling', title: 'Senior Stylist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7-aLsGXB6YS_eVW0Jzm686bXAZs1Oc4UNGZfcAQBlJIVmprlqPXHpzq0I0vTew4q86V22fQBrZ824khCX7rvgFBOjRKZWqxIbWbFq1abWKkogByNAuav20kVNZOL5_c0oviiNUhLuoiKVce4q9qzKpELb32CThpCgTBuWndJSc_pFY6YSTxf6JYos1w0OqyugjYWF1jr1Udf75_OG54NcrbrAOloMgHTVlyR4zJ8OkSDd_7CWOiOOWsJMPEStwvBA_vaPqd1EYZ7I' },
];

const useBookingStore = create((set, get) => ({
    selectedServicesIds: [],
    selectedBarberId: null,
    selectedDate: null,
    selectedTime: null,
    
    // Actions
    toggleService: (serviceId) => set((state) => {
        const isSelected = state.selectedServicesIds.includes(serviceId);
        if (isSelected) {
            return { selectedServicesIds: state.selectedServicesIds.filter(id => id !== serviceId) };
        } else {
            return { selectedServicesIds: [...state.selectedServicesIds, serviceId] };
        }
    }),
    
    setBarber: (barberId) => set({ selectedBarberId: barberId }),
    
    setDateAndTime: (date, time) => set({ selectedDate: date, selectedTime: time }),
    
    resetBooking: () => set({
        selectedServicesIds: [],
        selectedBarberId: null,
        selectedDate: null,
        selectedTime: null
    }),
    
    // Computed (Selectors conceptually)
    getTotalAmount: () => {
        const state = get();
        return state.selectedServicesIds.reduce((total, id) => {
            const service = MOCK_SERVICES.find(s => s.id === id); 
            return total + (service ? service.price : 0);
        }, 0);
    },
    
    getAvailableServices: () => MOCK_SERVICES,
    getAvailableBarbers: () => MOCK_BARBERS
}));

export default useBookingStore;

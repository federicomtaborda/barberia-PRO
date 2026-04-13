import { create } from 'zustand';

const useBookingStore = create((set, get) => ({
    allServices: [],
    allBarbers: [],
    selectedServicesIds: [],
    selectedBarberId: null,
    selectedDate: null,
    selectedTime: null,
    
    // Actions
    setAllServices: (services) => set({ allServices: services }),
    setAllBarbers: (barbers) => set({ allBarbers: barbers }),
    
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
    
    // Selectors
    getTotalAmount: () => {
        const { allServices, selectedServicesIds } = get();
        return selectedServicesIds.reduce((total, id) => {
            const service = allServices.find(s => s.id === id); 
            return total + (service ? parseFloat(service.precio) : 0);
        }, 0);
    },
}));

export default useBookingStore;

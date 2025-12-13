import Alpine from 'alpinejs'
import './styles/globals.css'

// Alpine.js Global Stores
Alpine.store('notifications', {
  items: [],
  add(notification) {
    const id = Date.now()
    this.items.push({ id, ...notification })
    if (notification.autoClose !== false) {
      setTimeout(() => this.remove(id), notification.duration || 5000)
    }
  },
  remove(id) {
    this.items = this.items.filter(item => item.id !== id)
  }
})

// Initialize Alpine
window.Alpine = Alpine
Alpine.start()

// Expose notification helper globally
window.notify = (message, type = 'info', duration = 5000) => {
  Alpine.store('notifications').add({ message, type, duration })
}


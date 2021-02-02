const openModalButtons1 = document.querySelectorAll('[data-modal-target-1]')
const openModalButtons2 = document.querySelectorAll('[data-modal-target-2]')
const openModalButtons3 = document.querySelectorAll('[data-modal-target-3]')
const openModalButtons4 = document.querySelectorAll('[data-modal-target-4]')
const openModalButtons5 = document.querySelectorAll('[data-modal-target-5]')
const openModalButtons6 = document.querySelectorAll('[data-modal-target-6]')
const openModalButtons7 = document.querySelectorAll('[data-modal-target-7]')
const openModalButtons8 = document.querySelectorAll('[data-modal-target-8]')
const openModalButtons9 = document.querySelectorAll('[data-modal-target-9]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const modalOverlay = document.getElementById('modal-overlay')

openModalButtons1.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal1')
    openModal(modal)
  })
})
openModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal2')
    openModal(modal)
  })
})
openModalButtons3.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal3')
    openModal(modal)
  })
})
openModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal4')
    openModal(modal)
  })
})
openModalButtons5.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal5')
    openModal(modal)
  })
})
openModalButtons6.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal6')
    openModal(modal)
  })
})
openModalButtons7.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal7')
    openModal(modal)
  })
})
openModalButtons8.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal8')
    openModal(modal)
  })
})
openModalButtons9.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal9')
    openModal(modal)
  })
})

modalOverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal){
  if (modal == null) return
  modal.classList.add('active')
  modalOverlay.classList.add('active')
}

function closeModal(modal){
  if (modal == null) return
  modal.classList.remove('active')
  modalOverlay.classList.remove('active')
}

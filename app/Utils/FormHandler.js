import { Pop } from "./Pop.js"

export function getFormData(form) {
  try {
    const formData = new FormData(form)
    const obj = {}
    formData.forEach((val, key) => {
      // REVIEW ID's at the keys on the form id's and values are what you put in/user put in
      obj[key] = val
    })
    return obj
  } catch (error) {
    console.error('[Extracting_Form_Data]', error)
    Pop.error(error)
  }
}

// NOTE YOU GIVE ME A FORM AND ILL USE FORM DATA AND WILL BUILD AN OBJECT WITH THE INFORMATION YOU SET UP ON THE FORM ID's
import { utilService } from './util.service.js'
import { asyncStorageService } from './async-storage.service.js'
import { storageService } from './storage.service.js'

const STORAGE_KEY = 'emailDB'
 var emails=_createEmails()
console.log('start emails',emails)
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

export const emailService = {
    query,
    get,
    remove,
    loggedinUser,
    save,
  
}


const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki',
    isRead: true,
    isStared: true,
    lables: ['important', 'romantic']
}


function query() {
    return asyncStorageService.query(STORAGE_KEY).then(books => {
        return books
    })
}
function get(mailId) {
    return asyncStorageService.get(STORAGE_KEY, mailId)
}

function remove(mailId) {
    return asyncStorageService.remove(STORAGE_KEY, mailId)
}

function save(email) {
    if (email.id) {
        return asyncStorageService.put(STORAGE_KEY,email)
    }else{
        return asyncStorageService.post(STORAGE_KEY,email)
    }
}
function _createEmails() {
    console.log('hhhh')
    let emails = []
    if(storageService.loadFromStorage(STORAGE_KEY)){
        emails=storageService.loadFromStorage(STORAGE_KEY)
    }
    console.log('emails', emails)
    // if (!emails || !emails.length) {
         emails.push(_createEmail())
    // }

    storageService.saveToStorage(STORAGE_KEY, emails)
 
    return emails
}

function _createEmail() {
    return {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'you love me?',
        isRead: false,
        sentAt: 1551133930594,
        remvedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
}

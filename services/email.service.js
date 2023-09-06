import { utilService } from './util.service.js'
import { asyncStorageService } from './async-storage.service.js'
import { storageService } from './storage.service.js'

const STORAGE_KEY = 'emailDB'
_createEmails()
export const emailService={
    query,
    get,
    remove,
    loggedinUser
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
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
function _createEmails() {
    console.log('hhhh')
    let emails = storageService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {
        emails.push(_createEmail())
    }

    storageService.saveToStorage(STORAGE_KEY, emails)
    console.log('emails', emails)
    return emails
}

function _createEmail() {
    return {
        id:  utilService.makeId(),
        subject: 'Miss you!',
        body: 'you love me?',
        isRead: false,
        sentAt: 1551133930594,
        remvedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
}

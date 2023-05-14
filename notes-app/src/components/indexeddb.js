const DB_NAME = "notes-db";
const STORE_NAME = "notes-store";

export function saveNote(note) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);

    request.onerror = (event) => {
      console.error("Could not open IndexedDB:", event);
      reject();
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const objectStore = transaction.objectStore(STORE_NAME);
      const objectStoreRequest = objectStore.put(note);

      objectStoreRequest.onsuccess = () => {
        resolve();
      };

      objectStoreRequest.onerror = () => {
        console.error(
          "Could not save note to IndexedDB:",
          objectStoreRequest.error
        );
        reject();
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };
  });
}

export function getNotes() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);

    request.onerror = (event) => {
      console.error("Could not open IndexedDB:", event);
      reject();
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction([STORE_NAME], "readonly");
      const objectStore = transaction.objectStore(STORE_NAME);
      const objectStoreRequest = objectStore.getAll();

      objectStoreRequest.onsuccess = () => {
        resolve(objectStoreRequest.result);
      };

      objectStoreRequest.onerror = () => {
        console.error(
          "Could not get notes from IndexedDB:",
          objectStoreRequest.error
        );
        reject();
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };
  });
}

export function deleteNote(id) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);

    request.onerror = (event) => {
      console.error("Could not open IndexedDB:", event);
      reject();
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const objectStore = transaction.objectStore(STORE_NAME);
      const objectStoreRequest = objectStore.delete(id);

      objectStoreRequest.onsuccess = () => {
        resolve();
      };

      objectStoreRequest.onerror = () => {
        console.error(
          "Could not delete note from IndexedDB:",
          objectStoreRequest.error
        );
        reject();
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };
  });
}

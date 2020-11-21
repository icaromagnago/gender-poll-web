import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const docId = 'jR4afKvWU5AzuFpUuez5';

const api = {
    vote: async (gender) => {
        let votesRef = db.collection('votes')
            .doc(docId);
        
        let poll = await votesRef.get();
        let pollData = poll.data();
        pollData[gender] = pollData[gender] + 1;

        votesRef.set(pollData, { merge: true });
    },

    onVoteResult: (setPollResult) => {
        return db.collection('votes').doc(docId).onSnapshot(doc => {
            if (doc.exists) {
                let data = doc.data();
                const totalVotes = data.boy + data.girl;

                let dataPercentage = {
                    boy: data.boy === 0 ? 0 : (data.boy / totalVotes * 100).toFixed(0),
                    girl: data.girl === 0 ? 0 : (data.girl / totalVotes * 100).toFixed(0),  
                }

                setPollResult(dataPercentage);
            }
        })
    },
}

export default api;
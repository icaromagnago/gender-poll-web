import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const api = {
    vote: async (gender) => {
        let votesRef = db.collection('votes')
            .doc('XGUCw6QgC9KHvBkvtPAt');
        
        let poll = await votesRef.get();
        let pollData = poll.data();
        pollData[gender] = pollData[gender] + 1;

        votesRef.set(pollData, { merge: true });
    },

    onVoteResult: (setPollResult) => {
        return db.collection('votes').doc('XGUCw6QgC9KHvBkvtPAt').onSnapshot(doc => {
            if (doc.exists) {
                let data = doc.data();
                const totalVotes = data.boy + data.girl;

                let dataPercentage = {
                    boy: (data.boy / totalVotes * 100).toFixed(1),
                    girl: (data.girl / totalVotes * 100).toFixed(1),  
                }

                setPollResult(dataPercentage);
            }
        })
    },
}

export default api;
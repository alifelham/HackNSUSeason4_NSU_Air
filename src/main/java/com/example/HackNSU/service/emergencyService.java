package com.example.HackNSU.service;

import com.example.HackNSU.model.emergency;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class emergencyService {
    static Integer i = 0;
    public emergency saveEmergency(emergency emergency) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        i++;
        emergency.seteId(i.toString());
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Emergencies").document(emergency.geteId().toString()).set(emergency);

        return emergency;
    }

    public List<emergency> getAllEmergencies() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Emergencies").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<emergency> emergencyList = new ArrayList<>();
        emergency emergency = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            emergency = documentSnapshot.toObject(emergency.class);
            emergencyList.add(emergency);
        }

        return emergencyList;
    }

    public String deleteEmergency(String id){
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> writeResult = dbFirestore.collection("Emergencies").document(id).delete();

        return "Emergency with id " + id + " has been deleted successfully!";
    }
}

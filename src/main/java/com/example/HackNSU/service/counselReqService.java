package com.example.HackNSU.service;

import com.example.HackNSU.model.counselReq;
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
public class counselReqService {
    static Integer i = 0;
    
    public counselReq savecounselReq(counselReq counselReq) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        i++;
        counselReq.setrId(i.toString());
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Counsel Reqs").document(counselReq.getrId().toString()).set(counselReq);

        return counselReq;
    }

    public List<counselReq> getAllCounselReqs() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Counsel Reqs").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<counselReq> counselReqList = new ArrayList<>();
        counselReq counselReq = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            counselReq = documentSnapshot.toObject(counselReq.class);
            counselReqList.add(counselReq);
        }

        return counselReqList;
    }

    public String deleteReq(String id){
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> writeResult = dbFirestore.collection("Counsel Reqs").document(id).delete();

        return "Emergency with id " + id + "has been deleted successfully!";
    }
}

package com.example.HackNSU.service;

import com.example.HackNSU.model.complaint;
import com.example.HackNSU.model.complaint;
import com.example.HackNSU.model.complaint;
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
public class complaintService {
    static Integer i = 0;

    public complaint saveComplaint(complaint complaint) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        i++;
        complaint.setcId(i.toString());
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Complaints").document(complaint.getcId().toString()).set(complaint);

        return complaint;
    }

    public List<complaint> getAllComplaints() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();

        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Complaints").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<complaint> complaintList = new ArrayList<>();
        complaint complaint = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            complaint = documentSnapshot.toObject(complaint.class);
            complaintList.add(complaint);
        }

        return complaintList;
    }

    public String deleteComplaint(String id){
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> writeResult = dbFirestore.collection("Complaints").document(id).delete();

        return "Complaint with id " + id + " has been deleted successfully!";
    }
}

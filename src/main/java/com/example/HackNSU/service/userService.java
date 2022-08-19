package com.example.HackNSU.service;

import com.example.HackNSU.model.user;
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
public class userService {
    public user saveUser(user user) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Users").document(user.getId().toString()).set(user);

        return user;
    }

    public user getUserByID(String id) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference docRef = dbFirestore.collection("Users").document(id);

        ApiFuture<DocumentSnapshot> future = docRef.get();

        DocumentSnapshot document = future.get();
        user user = null;
        if (document.exists()) {
            // convert document to POJO
            user = document.toObject(user.class);
            return user;
        } else {
            return new user();
        }
    }

    public List<user> getAllUsers() throws ExecutionException, InterruptedException {

        Firestore dbFirestore = FirestoreClient.getFirestore();



        Iterable<DocumentReference>documentReferences = dbFirestore.collection("Users").listDocuments();
        Iterator<DocumentReference> iterator = documentReferences.iterator();

        List<user> userList = new ArrayList<>();
        user user = null;

        while(iterator.hasNext())
        {
            DocumentReference documentReference = iterator.next();
            ApiFuture<DocumentSnapshot> future = documentReference.get();

            DocumentSnapshot documentSnapshot = future.get();

            user = documentSnapshot.toObject(user.class);
            userList.add(user);
        }

        return userList;
    }


}

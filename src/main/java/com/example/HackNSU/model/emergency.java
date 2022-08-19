package com.example.HackNSU.model;

public class emergency {
    private String eId;
    private String name;
    private String id;
    private String contact;
    private String address;
    private String email;
    private String age;

    public emergency(String address, String eId, String name, String id, String contact, String email, String age) {
        this.eId = eId;
        this.name = name;
        this.id = id;
        this.contact = contact;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    public emergency(){}

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String geteId() {
        return eId;
    }

    public void seteId(String eId) {
        this.eId = eId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }
}

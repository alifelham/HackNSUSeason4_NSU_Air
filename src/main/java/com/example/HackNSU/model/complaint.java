package com.example.HackNSU.model;

public class complaint {
    private String cId;
    private String name;
    private String id;
    private String email;
    private String contact;
    private String age;

    public complaint(String cId, String name, String id, String email, String contact, String age) {
        this.cId = cId;
        this.name = name;
        this.id = id;
        this.email = email;
        this.contact = contact;
        this.age = age;
    }

    public complaint(){}

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "user{" +
                "cId='" + cId + '\'' +
                ", name='" + name + '\'' +
                ", id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", contact='" + contact + '\'' +
                ", age='" + age + '\'' +
                '}';
    }
}

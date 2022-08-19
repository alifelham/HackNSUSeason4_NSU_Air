package com.example.HackNSU.model;

public class user {
    String name;
    String address;
    String contact;
    String email;
    String id;
    String type;
    String password;
    String cPass;
    String age;

    public user(String name, String address, String contact, String email, String id, String type, String password, String cPass, String age) {
        this.name = name;
        this.address = address;
        this.contact = contact;
        this.email = email;
        this.id = id;
        this.type = type;
        this.password = password;
        this.cPass = cPass;
        this.age = age;
    }

    public user(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getcPass() {
        return cPass;
    }

    public void setcPass(String cPass) {
        this.cPass = cPass;
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
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", contact='" + contact + '\'' +
                ", email='" + email + '\'' +
                ", id='" + id + '\'' +
                ", type='" + type + '\'' +
                ", password='" + password + '\'' +
                ", cPass='" + cPass + '\'' +
                ", age='" + age + '\'' +
                '}';
    }
}

package com.example.HackNSU.model;

public class counselReq {
    private String rId;
    private String id;
    private String name;

    public counselReq(String rId, String id, String name) {
        this.rId = rId;
        this.id = id;
        this.name = name;
    }

    counselReq(){}

    public String getrId() {
        return rId;
    }

    public void setrId(String rId) {
        this.rId = rId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "counselReq{" +
                "rId='" + rId + '\'' +
                ", id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}

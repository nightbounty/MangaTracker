package com.MyMangaLog.MangaTracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Manga {
    @Id
    private String title;
    private String readingstatus;
    private Long chapter;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getReadingstatus() {
        return readingstatus;
    }

    public void setReadingstatus(String readingstatus) {
        this.readingstatus = readingstatus;
    }

    public Long getChapter() {
        return chapter;
    }

    public void setChapter(Long chapter) {
        this.chapter = chapter;
    }
}

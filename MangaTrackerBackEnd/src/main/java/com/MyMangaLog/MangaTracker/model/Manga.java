package com.MyMangaLog.MangaTracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Manga {
    @Id
    private String title;
    private String status;
    private Long chapter;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getChapter() {
        return chapter;
    }

    public void setChapter(Long chapter) {
        this.chapter = chapter;
    }
}

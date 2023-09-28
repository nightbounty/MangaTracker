package com.MyMangaLog.MangaTracker.exception;

public class MangaNotFoundException extends RuntimeException {
    public MangaNotFoundException(String title)
    {
        super("Could not found the user with id " + title);
    }
}

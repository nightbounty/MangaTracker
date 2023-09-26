package com.MyMangaLog.MangaTracker.controller;

import com.MyMangaLog.MangaTracker.model.Manga;
import com.MyMangaLog.MangaTracker.repository.MangaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MangaController {

    @Autowired
    private MangaRepository mangaRepository;

    @PostMapping("/manga")
    Manga newManga(@RequestBody Manga newManga){
        return mangaRepository.save(newManga);
    }
}


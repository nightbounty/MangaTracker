package com.MyMangaLog.MangaTracker.controller;

import com.MyMangaLog.MangaTracker.model.Manga;
import com.MyMangaLog.MangaTracker.repository.MangaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://127.0.0.1:5173/")
public class MangaController {

    @Autowired
    private MangaRepository mangaRepository;

    @PostMapping("/manga")
    Manga newManga(@RequestBody Manga newManga){
        return mangaRepository.save(newManga);
    }

    @GetMapping("/mangas")
    List<Manga> getAllMangas(){
        return mangaRepository.findAll();
    }

}


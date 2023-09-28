package com.MyMangaLog.MangaTracker.controller;

import com.MyMangaLog.MangaTracker.exception.MangaNotFoundException;
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

    @GetMapping("/manga/{title}")
    Manga getMangaById(@PathVariable String title) {
        return mangaRepository.findById(title)
                .orElseThrow(() -> new MangaNotFoundException(title));
    }

    @PutMapping("/manga/{title}")
    Manga updateManga(@RequestBody Manga newManga, @PathVariable String title) {
        return mangaRepository.findById(title)
                .map(manga -> {
                    manga.setReadingstatus(newManga.getReadingstatus());
                    manga.setChapter(newManga.getChapter());
                    return mangaRepository.save(manga);
                }).orElseThrow(() -> new MangaNotFoundException(title));
    }

}


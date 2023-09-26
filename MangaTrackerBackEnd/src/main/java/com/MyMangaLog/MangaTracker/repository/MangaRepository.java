package com.MyMangaLog.MangaTracker.repository;

import com.MyMangaLog.MangaTracker.model.Manga;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MangaRepository extends JpaRepository<Manga,String> {


}

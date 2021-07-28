import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [output, setOutput] = useState(null);
  const [book, setBook] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [verse, setVerse] = useState(null);

  const verses = [
    { Verse: "13", chapter: "29", Book: "Jeremiah" },
    { Verse: "3", chapter: "33", Book: "Jeremiah" },
    { Verse: "3", chapter: "2", Book: "Psalms" },
    { Verse: "3", chapter: "5", Book: "Psalms" },
    { Verse: "24", chapter: "22", Book: "Psalms" },
    { Verse: "15", chapter: "50", Book: "Psalms" },
    { Verse: "17", chapter: "55", Book: "Psalms" },
    { Verse: "8", chapter: "62", Book: "Psalms" },
    { Verse: "1", chapter: "63", Book: "Psalms" },
    { Verse: "17", chapter: "102", Book: "Psalms" },
    { Verse: "2", chapter: "119", Book: "Psalms" },
    { Verse: "10", chapter: "119", Book: "Psalms" },
    { Verse: "4", chapter: "4", Book: "1 Corinthians" },
    { Verse: "13", chapter: "4", Book: "Philippians " },
    { Verse: "16", chapter: "3", Book: "John" },
    { Verse: "3", chapter: "3", Book: "John" },
    { Verse: "16", chapter: "3", Book: "John" },
    { Verse: "36", chapter: "3", Book: "John" },
    { Verse: "28", chapter: "10", Book: "John" },
    { Verse: "14", chapter: "6", Book: "John" },
    { Verse: "7", chapter: "15", Book: "John" },
    { Verse: "31", chapter: "16", Book: "Acts" },
    { Verse: "23", chapter: "3", Book: "Romans" },
    { Verse: "23", chapter: "6", Book: "Romans" },
    { Verse: "17", chapter: "5", Book: "Corinthians" },
    { Verse: "5", chapter: "3", Book: "Titus" },
    { Verse: "22", chapter: "9", Book: "Hebrews" },
    { Verse: "20", chapter: "3", Book: " Revelation" },
    { Verse: "18", chapter: "3", Book: "Matthew" },
    { Verse: "5", chapter: "6", Book: "Matthew" },
    { Verse: "7", chapter: "7", Book: "Matthew" },
    { Verse: "21", chapter: "17", Book: "Matthew" },
    { Verse: "39", chapter: "26", Book: "Matthew" },
    { Verse: "19", chapter: "30", Book: "Isaiah" },
    { Verse: "11", chapter: "45", Book: "Isaiah" },
    { Verse: "6", chapter: "55", Book: "Isaiah" },
    { Verse: "7", chapter: "64", Book: "Isaiah" },
    { Verse: "24", chapter: "65", Book: "Isaiah" },
    { Verse: "19", chapter: "2", Book: "Lamentations" },
    { Verse: "12", chapter: "2", Book: "Joel" },
    { Verse: "24", chapter: "11", Book: "Mark" },
    { Verse: "20", chapter: "3", Book: "Ephesians" },
  ];

  const getData = () => {
    const randomVerse = Math.floor(Math.random() * verses.length);
    console.log(randomVerse);
    const options = {
      method: "GET",
      url: "https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter",
      params: verses[randomVerse],
      headers: {
        "x-rapidapi-key": "87a8a0fb02msh69ffa63d24d9787p152b15jsn9139ed6e71d2",
        "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setOutput(response.data.Output);
        setBook(response.data.Book);
        setChapter(response.data.Chapter);
        setVerse(response.data.Verse);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app__wrapper">
      <div className="parm__wrapper">
        <span className="book">Book: {book}</span>
        <span className="chapter">Chapter: {chapter}</span>
        <span className="verse">Verse: {verse}</span>
      </div>
      <button
        onClick={() => {
          getData();
        }}
        className="btn"
      >
        Verse
      </button>
      <div className="output__wrapper">
        <span className="output">{output}</span>
      </div>
    </div>
  );
};

export default App;

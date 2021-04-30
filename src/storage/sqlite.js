import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('oki-jisho.db');

export const createVocabularyTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'create table if not exists vocabulary (id integer primary key not null, word text not null, translation text not null, tags text);'
    );
  });
};

export const readFromVocabulary = (updateVocabularyState) => {
  db.transaction((tx) => {
    tx.executeSql(
      'select * from vocabulary',
      [],
      updateVocabularyState
        ? (_, { rows: { _array } }) => updateVocabularyState(_array)
        : null
    );
  });
};

export const insertIntoVocabulary = (word, translation, tags) => {
  db.transaction((tx) => {
    tx.executeSql(
      'insert into vocabulary (word, translation, tags) values (?, ?, ?)',
      [word, translation, tags]
    );
    tx.executeSql('select * from vocabulary', [], (_, { rows }) =>
      console.log(JSON.stringify(rows))
    );
  });
};

export const updateRowInVocabulary = (
  id,
  translation,
  tags,
  updateVocabularyState
) => {
  db.transaction((tx) => {
    tx.executeSql(
      'update vocabulary set translation = ?, tags = ? where id = ?;',
      [translation, tags, id],
      updateVocabularyState
        ? (_, { rows: { _array } }) => console.log(_array)
        : null
    );
  });
};

export const deleteRowFromVocabulary = (id, updateVocabularyState) => {
  db.transaction((tx) => {
    tx.executeSql(
      'delete from vocabulary where id = ?;',
      [id],
      updateVocabularyState
        ? (_, { rows: { _array } }) => console.log(_array)
        : null
    );
  });
};

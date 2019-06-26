
C:\Users\Saturnux\Documents\javascript\Challenge 15>sqlite3 University.db
SQLite version 3.27.2 2019-02-25 16:06:06
Enter ".help" for usage hints.
sqlite> .schema
CREATE TABLE jurusan(
    kode_jurusan TEXT PRIMARY KEY,
    nama_jurusan VARCHAR(100)
    );
CREATE TABLE mahasiswa(
    nim TEXT PRIMARY KEY,
    nama VARCHAR(100),
    alamat VARCHAR(100),
    kode_jurusan TEXT
);
CREATE TABLE dosen(
    nip TEXT PRIMARY KEY,
    nama VARCHAR(100)
);
CREATE TABLE matakuliah(
    kode_mk TEXT PRIMARY KEY,
    sks VARCHAR(100),
    nama VARCHAR(100)
);
CREATE TABLE kontrak(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    nim TEXT,
    nip TEXT,
    kode_jurusan TEXT,
    kode_mk TEXT
);
CREATE TABLE sqlite_sequence(name,seq);
sqlite> SELECT * FROM mahasiswa
   ...> ;
123332|Christian|BANDUNG|323
836565|ABU|JAKARTA|893
213345|ziden|JAKARTA|923
sqlite> SELECT * FROM mahasiswa
   ...> ;
123332|Christian|BANDUNG|323
836565|ABU|JAKARTA|893
213345|ziden|JAKARTA|923
sqlite> SELECT * FROM mahasiswa jurusan
   ...> ;
123332|Christian|BANDUNG|323
836565|ABU|JAKARTA|893
213345|ziden|JAKARTA|923
sqlite> SELECT * FROM mahasiswa INNER JOIN jurusan ON mahasiswa.kode_jurusan=jurusan.kode_jurusan;
123332|Christian|BANDUNG|323|323|TI
836565|ABU|JAKARTA|893|893|AKUTANSI
sqlite> SELECT * FROM mahasiswa
   ...> SELECT * FROM mahasiswa;
Error: near "SELECT": syntax error
sqlite> SELECT * FROM mahasiswa
   ...> ;
123332|Christian|BANDUNG|323
836565|ABU|JAKARTA|893
213345|ziden|JAKARTA|923
sqlite> SELECT * FROM mahasiswa INNER JOIN jurusan ON mahasiswa.kode_jurusan=jurusan.kode_jurusan;
123332|Christian|BANDUNG|323|323|TI
836565|ABU|JAKARTA|893|893|AKUTANSI
sqlite> SELECT mahasiswa.nama_mahasiswa FROM mahasiswa INNER JOIN jurusan ON mahasiswa.kode_jurusan=jurusan.kode_jurusan;
Error: no such column: mahasiswa.nama_mahasiswa
sqlite> SELECT mahasiswa.nama FROM mahasiswa INNER JOIN jurusan ON mahasiswa.kode_jurusan=jurusan.kode_jurusan;
Christian
ABU
sqlite> SELECT mahasiswa.nama,jurusan.nama_jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.kode_jurusan=jurusan.kode_jurusan;
Christian|TI
ABU|AKUTANSI
sqlite>

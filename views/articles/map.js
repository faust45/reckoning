function(doc) {
    if (doc.type == "Article") {
      emit(null, doc);
    }
}

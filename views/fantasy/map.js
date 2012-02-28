function(doc) {
    if (doc.type == "Photo" && doc.section == "Fantasy") {
      emit(null, doc);
    }
}

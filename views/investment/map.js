function(doc) {
    if (doc.type == "Article" && doc.source == "Investment") {
        emit(null, doc);
    }
}

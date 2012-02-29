function(doc) {
    if (doc.type == "Article" && doc.section == "Investment") {
        emit(null, doc);
    }
}

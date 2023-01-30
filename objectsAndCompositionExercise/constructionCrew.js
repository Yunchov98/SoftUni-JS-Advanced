function constructionCrew(info) {
    if (info.dizziness === true) {
        info.levelOfHydrated += 0.1 * info.weight * info.experience;
        info.dizziness = false;
    }

    return info;
}

constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
);
console.log('-----------------');
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);
console.log('----');
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
);
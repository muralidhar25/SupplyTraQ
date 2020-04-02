function getRandomData(ordinal = false) {

  const NGROUPS = 3,
    MAXLINES = 10,
    MAXSEGMENTS = 10,
    MAXCATEGORIES = 10,
    MINTIME = new Date(2014,12,21);

  const nCategories = Math.ceil(Math.random()*MAXCATEGORIES),
    categoryLabels = ['Phase 1','Phase 2','Phase 3'];

  return [...Array(NGROUPS).keys()].map(i => ({
    group: 'Company' + (i+1),
    data: getGroupData()
  }));

  //

  function getGroupData() {

    return [...Array(Math.ceil(Math.random()*MAXLINES)).keys()].map(i => ({
      label: 'label' + (i+1),
      data: getSegmentsData()
    }));

    //

    function getSegmentsData() {
      const nSegments = Math.ceil(Math.random()*MAXSEGMENTS),
        segMaxLength = Math.round(((new Date())-MINTIME)/nSegments);
      let runLength = MINTIME;

      return [...Array(nSegments).keys()].map(i => {
        const tDivide = [Math.random(), Math.random()].sort(),
          start = new Date(runLength.getTime() + tDivide[0]*segMaxLength),
          end = new Date(runLength.getTime() + tDivide[1]*segMaxLength);

        runLength = new Date(runLength.getTime() + segMaxLength);

        return {
          timeRange: [start, end],
          val: ordinal ? categoryLabels[Math.ceil(Math.random()*nCategories)] : Math.random()
          //labelVal: is optional - only displayed in the labels
        };
      });

    }
  }
}

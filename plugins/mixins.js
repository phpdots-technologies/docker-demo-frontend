import Vue from 'vue'

const _Mixins = {
    methods: {
        __addDummySelectText(Data, valKey, titleKey, text) {
            let newArray = [];
            let DummyData = {};
            DummyData[valKey] = '';
            DummyData[titleKey] = text || 'Select an item';
            newArray.push(DummyData);
            Data.forEach(item => {
                newArray.push(item);
            });
            return newArray;
        },

        __generateMessageStringFromError(ErrorMessage) {
            let ErrorArr = [];
            for (var p in ErrorMessage) {
                if (ErrorMessage.hasOwnProperty(p)) {
                    ErrorMessage[p].forEach(item => {
                        ErrorArr.push(item);
                    });
                }
            }
            return ErrorArr;
        },
    }
}

Vue.mixin(_Mixins);
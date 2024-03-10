import { create } from 'zustand';


export const useActions = create((set) => ({
    //step1
    showBasicPopup:false,
    //step2
    showTitlePopup:false,
    //step3
    loadingCreateTitle:false,
    //step3.5
    showKtPopup:false,
    loadingCreateKt:false,
    //step4
    showSummaryPopup:false,
    loadingCreateSummary:false,
    //step5
    showDirectoryPopup:false,
    loadingCreateDirectory:false,
    //step6
    //step7
    showLinkPopup:false,
    loadingLinkDirectory:false,
    //step8
    showThankPopup:false,
    loadingCreateThank:false,
    realPlayTimeSum:0,
    totalDurationSum:0,
    taskState:0
}));
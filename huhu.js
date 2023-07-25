window.HUHU_showInterstitialAd = () => {
    console.log(66666666666,"showInterstitialAd");
    let isInterstitialReady = MiniGameAds.isInterstitialReady();
    if (isInterstitialReady){
        MiniGameAds.showInterstitial().then(()=>{
            console.info("====> show interstitial success");
        }).catch(e => {
            console.error("====> show interstitial error: " + e.message);
        });
    }else {
        console.info("====> interstitial not ready");
    }
};
window.HUHU_showRewardedVideoAd = (success, failure) => {
    console.log(66666666666,"showRewardedVideoAd");
    let isRewardVideoReady = MiniGameAds.isRewardvideoReady();
    if (isRewardVideoReady){
        MiniGameAds.showRewardedVideo().then(()=>{
            console.info("====> show RewardedVideo success");
            success&&success();
        }).catch(e => {
            console.error("====> show RewardedVideo error: " + e.message);
        });
    }else {
        console.info("====> RewardedVideo not ready");
    }
};
window.HUHU_showBannerAd = (success, failure) => {
    console.log(66666666666,"showBannerAd");
    let isBannerReady = MiniGameAds.isBannerReady();
    if (isBannerReady){
        MiniGameAds.showBanner().then(()=>{
            console.info("====> show banner success");
        }).catch(e => {
            console.error("====> show banner error: " + e.message);
            // window.HUHU_showBannerAd();
        });
    }else {
        console.info("====> banner not ready");
        // window.HUHU_showBannerAd();
    }
};
window.HUHU_HideBannerAd = (success, failure) => {
    console.log(66666666666,"HideBannerAd");
    MiniGameAds.hideBanner().then(()=>{
        console.info("====> hide banner success");
    }).catch(e => {
        console.error("====> hide banner error: " + e.message);
    });
};
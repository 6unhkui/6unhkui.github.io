type InfiniteScroll = (callback: () => void) => void;

const infiniteScroll: InfiniteScroll = callback => {
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight > scrollHeight - 300) {
        callback();
    }
};

export default infiniteScroll;

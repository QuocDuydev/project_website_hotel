export function useAccessToken() {
    let authTokens = localStorage.getItem('authTokens');

    // Kiểm tra xem authTokens có tồn tại và không phải null không
    if (authTokens) {
        let parsedTokens = JSON.parse(authTokens);
        
        // Kiểm tra xem parsedTokens có thuộc tính 'access' không
        if (parsedTokens && parsedTokens.access) {
            return parsedTokens.access;
        } else {
            // Trả về một giá trị mặc định hoặc null nếu không có thuộc tính 'access'
            return null; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
        }
    } else {
        // Trả về một giá trị mặc định hoặc null nếu không có authTokens
        return null; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
    }
}
require("dotenv").config();
// 環境変数からトークンを読み込み
const validToken = process.env.SENTRY_TOKEN;

/**
 * トークン認証ミドルウェア
 * @param {*} req リクエスト
 * @param {*} res レスポンス
 * @param {*} next 次の処理
 * @return {void} なし
 */
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];
  if (token == null) return res.sendStatus(401);

  if (!token.includes(`Bearer ${validToken}`)) {
    return res.sendStatus(403);
  }

  next();
}

module.exports = authenticateToken;

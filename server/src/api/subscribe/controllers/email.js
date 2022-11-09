module.exports = {
  send: async (ctx) => {
    let options = ctx.request.body;
    console.log("🚀 ~ file: email.js ~ line 4 ~ send: ~ options", options);

    await strapi.plugin("email").service("email").send({
      to: options.to,
      from: options.from,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });

    ctx.send("Email sent!");
  },
};

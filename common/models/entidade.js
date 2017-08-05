'use strict';

module.exports = function(entidade) {
/*..
  entidade.findById({include:['tipoPessoa']}, function(data) {
     console.log(data);
  });
*/
  //console.log(entidade);

  entidade.beforeRemote( '**', function( ctx, user, next) {
      //...
      //console.log(ctx.req.body);
      entidade.find({include:['tipoPessoa','tipoEntidade']}, function(data) {
        console.log(data);
      });

      next();
  });
};

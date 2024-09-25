exports.listMember = (req, res) => {
  try {
    //code
    res.send("Hello ListMember Controller");
  } catch (err) {
    // err
    console.log(err);
  }
};
exports.updateMember = (req, res) => {
  try {
    //code
    const { memberId } = req.params;
    const { role } = req.body;
    console.log(role);
    res.send("Hello UpdateMember Controller");
  } catch (err) {
    //err
    console.log(err);
  }
};

exports.removeMember = (req, res) => {
  try {
    //code
    const { memberId } = req.params;
    console.log(memberId);
    res.send("Hello Remove Member");
  } catch (err) {
    //err
    console.log(err);
  }
};
